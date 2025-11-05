package com.smartmeter.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

@RestController
@RequestMapping("/api")
class BillDeskWebhookController {

    private final List<String> webhookData = new ArrayList<>();
    private final CopyOnWriteArrayList<SseEmitter> emitters = new CopyOnWriteArrayList<>();
    private static final String SECRET_KEY = "4u4akYDyOojgMwgU8xr464yOMmtM2cPe";

    @PostMapping("/webhook")
    public ResponseEntity<String> receiveWebhook(@RequestBody String data, @RequestHeader("X-Signature") String signature) {
        if (!verifySignature(data, signature)) {
            return ResponseEntity.status(403).body("Invalid signature");
        }
        webhookData.add(data);
        emitters.forEach(emitter -> {
            try {
                emitter.send(data);
            } catch (Exception e) {
                emitters.remove(emitter);
            }
        });
        System.out.println("Valid Webhook received: " + data);
        return ResponseEntity.ok("Webhook received");
    }

    private boolean verifySignature(String data, String signature) {
        try {
            Mac sha256Hmac = Mac.getInstance("HmacSHA256");
            SecretKeySpec secretKey = new SecretKeySpec(SECRET_KEY.getBytes(), "HmacSHA256");
            sha256Hmac.init(secretKey);
            byte[] hash = sha256Hmac.doFinal(data.getBytes());
            String computedSignature = DatatypeConverter.printBase64Binary(hash);
            return signature.equals(computedSignature);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @GetMapping("/events")
    public SseEmitter streamEvents() {
        SseEmitter emitter = new SseEmitter();
        emitters.add(emitter);
        return emitter;
    }
}
