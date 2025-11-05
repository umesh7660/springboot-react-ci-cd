package com.smartmeter.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smartmeter.repository.NavbarRepository;

import java.util.List;
import java.util.Optional;

@Service
public class NavbarService {
    @Autowired
    private NavbarRepository navbarRepository;

    public String findByName(String navbarId) {
        try {
            Optional<String> name = navbarRepository.findByName(Integer.parseInt(navbarId));
            return name.orElse(null); // Return the value if present, else return null
        } catch (NumberFormatException e) {
            System.err.println("Invalid navbarId format: " + navbarId);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
    
    public List<String> findByNavbarHeaderId(String navbarId) {
        return navbarRepository.findByNavbarHeaderId(Integer.parseInt(navbarId));
    }
}

