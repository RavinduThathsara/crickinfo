package com.cricket.repository;

import com.cricket.entity.Match;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MatchRepository extends JpaRepository<Match, Long> {
    List<Match> findByLiveTrueOrderByStartTimeAsc();
}
