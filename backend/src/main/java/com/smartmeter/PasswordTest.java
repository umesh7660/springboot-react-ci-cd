package com.smartmeter;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordTest {
    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        // Hash the password "demo@123"
        String rawPassword = "demo@123";
        String hashedPassword = "$2a$10$87ie55aTPZg7RyCuNmxTaugvuTq1BM7en01GIMp.01TZm1zi5GLAy"; // Your stored hash

        String encodedPassword = encoder.encode(rawPassword);  // Hashing

        System.out.println("Encoded Password: " + encodedPassword);

        // Verify if "demo@123" matches the hashed password
        boolean matches = encoder.matches(rawPassword, hashedPassword);
        System.out.println("Password Match: " + matches);
    }
}

