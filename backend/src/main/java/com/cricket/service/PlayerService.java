package com.cricket.service;

import com.cricket.entity.Player;
import com.cricket.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PlayerService {
    
    @Autowired
    private PlayerRepository playerRepository;
    
    public List<Player> searchPlayers(String name) {
        return playerRepository.findByNameContainingIgnoreCase(name);
    }
    
    public Player getPlayerById(Long id) {
        return playerRepository.findById(id).orElse(null);
    }
    
    public Player savePlayer(Player player) {
        return playerRepository.save(player);
    }
    
    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }
}
