package com.cricket.controller;

import com.cricket.entity.Match;
import com.cricket.service.MatchService;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/matches")
@CrossOrigin(origins = "http://localhost:4200")
public class MatchController {

    private final MatchService matchService;

    public MatchController(MatchService matchService) {
        this.matchService = matchService;
    }

    @GetMapping("/live")
    public ResponseEntity<List<Match>> getLiveMatches() {
        return ResponseEntity.ok(matchService.getLiveMatches());
    }
}
