
package com.smartmeter.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class WebSocketController {

	@MessageMapping("/update")
	@SendTo("/topic/meterUpdates")
	public String sendUpdate(String message) {
		return "Real-time update: " + message;
	}
}
