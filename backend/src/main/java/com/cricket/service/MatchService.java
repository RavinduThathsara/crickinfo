package com.cricket.service;

import com.cricket.entity.Match;
import com.cricket.repository.MatchRepository;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class MatchService {

    private final MatchRepository matchRepository;

    public MatchService(MatchRepository matchRepository) {
        this.matchRepository = matchRepository;
    }

    public List<Match> getLiveMatches() {
        return matchRepository.findByLiveTrueOrderByStartTimeAsc();
    }
}
