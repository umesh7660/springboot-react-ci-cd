package com.smartmeter.utils;
import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.SecretKeySpec;

import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.SecureRandom;
import java.security.spec.KeySpec;
import java.util.Base64;
@Component
public class EncAndDecLogic {
    private static final String ALGORITHM = "AES";
    private static final String TRANSFORMATION = "AES/CBC/PKCS5Padding";
    private static final String SECRET_KEY_ALGORITHM = "PBKDF2WithHmacSHA256";
    private static final int KEY_SIZE = 256;
    private static final int IV_SIZE = 16;
    private static final int ITERATION_COUNT = 65536;
    
    // Generate a Secret Key from a password
    private static SecretKey generateKey(String password, byte[] salt) throws Exception {
        SecretKeyFactory factory = SecretKeyFactory.getInstance(SECRET_KEY_ALGORITHM);
        KeySpec spec = new PBEKeySpec(password.toCharArray(), salt, ITERATION_COUNT, KEY_SIZE);
        return new SecretKeySpec(factory.generateSecret(spec).getEncoded(), ALGORITHM);
    }

    // Encrypt a string
    public static String encrypt(String data) throws Exception {
    	if(data==null || data.isEmpty())
    		return null;
        byte[] salt = new byte[IV_SIZE];
        new SecureRandom().nextBytes(salt); // Generate random salt
        
        SecretKey secretKey = generateKey("secretData", salt);
        Cipher cipher = Cipher.getInstance(TRANSFORMATION);
        
        byte[] iv = new byte[IV_SIZE];
        new SecureRandom().nextBytes(iv); // Generate random IV
        IvParameterSpec ivSpec = new IvParameterSpec(iv);
        
        cipher.init(Cipher.ENCRYPT_MODE, secretKey, ivSpec);
        byte[] encrypted = cipher.doFinal(data.getBytes(StandardCharsets.UTF_8));
        
        // Concatenate Salt + IV + Encrypted Data
        byte[] encryptedData = new byte[salt.length + iv.length + encrypted.length];
        System.arraycopy(salt, 0, encryptedData, 0, salt.length);
        System.arraycopy(iv, 0, encryptedData, salt.length, iv.length);
        System.arraycopy(encrypted, 0, encryptedData, salt.length + iv.length, encrypted.length);

        return Base64.getEncoder().encodeToString(encryptedData);
    }

    // Decrypt a string
    public static String decrypt(String encryptedData) throws Exception {
    	if(encryptedData==null || encryptedData.isEmpty())
    		return null;
        byte[] decodedData = Base64.getDecoder().decode(encryptedData);
        
        byte[] salt = new byte[IV_SIZE];
        byte[] iv = new byte[IV_SIZE];
        byte[] cipherText = new byte[decodedData.length - (IV_SIZE * 2)];

        System.arraycopy(decodedData, 0, salt, 0, IV_SIZE);
        System.arraycopy(decodedData, IV_SIZE, iv, 0, IV_SIZE);
        System.arraycopy(decodedData, IV_SIZE * 2, cipherText, 0, cipherText.length);

        SecretKey secretKey = generateKey("secretData", salt);
        Cipher cipher = Cipher.getInstance(TRANSFORMATION);
        IvParameterSpec ivSpec = new IvParameterSpec(iv);
        
        cipher.init(Cipher.DECRYPT_MODE, secretKey, ivSpec);
        byte[] decrypted = cipher.doFinal(cipherText);
        
        return new String(decrypted, StandardCharsets.UTF_8);
    }

    public static void main(String[] args) {
        try {
            String text = "";
            
            String encryptedText = encrypt(text);
            System.out.println("Encrypted: " + encryptedText);
            
            String decryptedText = decrypt("qKPtO6Fjzxsvio8S5xysJtbhxUylY3fKE9iMp/v1qIKEgh7u2e4amh39+U1h2y9r");
            System.out.println("Decrypted: " + decryptedText);
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
