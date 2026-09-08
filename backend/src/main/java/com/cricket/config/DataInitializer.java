package com.cricket.config;

import com.cricket.entity.Player;
import com.cricket.entity.Match;
import com.cricket.repository.MatchRepository;
import com.cricket.repository.PlayerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Component
public class DataInitializer implements CommandLineRunner {

    private final PlayerRepository playerRepository;
    private final MatchRepository matchRepository;

    public DataInitializer(PlayerRepository playerRepository, MatchRepository matchRepository) {
        this.playerRepository = playerRepository;
        this.matchRepository = matchRepository;
    }

    @Override
    public void run(String... args) {
        if (playerRepository.count() == 0) {
            // Add Kumar Sangakkara
            Player sangakkara = new Player();
            sangakkara.setName("Kumar Sangakkara");
            sangakkara.setCountry("Sri Lanka");
            sangakkara.setBirthDate(LocalDate.of(1977, 10, 27));
            sangakkara.setRole("Wicket-keeper Batsman");

            // ODI Stats
            sangakkara.setOdiRuns(14234);
            sangakkara.setOdiBestScore(169);
            sangakkara.setOdiDebutDate(LocalDate.of(2000, 7, 5));
            sangakkara.setOdiMatches(404);
            sangakkara.setOdiCenturies(25);

            // Test Stats
            sangakkara.setTestRuns(12400);
            sangakkara.setTestBestScore(319);
            sangakkara.setTestDebutDate(LocalDate.of(2000, 7, 20));
            sangakkara.setTestMatches(134);
            sangakkara.setTestCenturies(38);

            // Other Stats
            sangakkara.setFirstClassRuns(28016);
            sangakkara.setTotalRuns(28016);

            playerRepository.save(sangakkara);

            System.out.println("Sample data initialized with Kumar Sangakkara");
        }

        if (matchRepository.count() == 0) {
            Match liveMatch = new Match();
            liveMatch.setTeam1("IND");
            liveMatch.setTeam2("AUS");
            liveMatch.setTeam1Flag("🇮🇳");
            liveMatch.setTeam2Flag("🇦🇺");
            liveMatch.setTeam1Score("342/4");
            liveMatch.setStatus("To bat");
            liveMatch.setLive(true);
            liveMatch.setOvers("44.2 Overs");
            liveMatch.setCurrentRunRate("CRR: 7.72");
            liveMatch.setBatter1Name("Virat Kohli");
            liveMatch.setBatter1Score("113*(145)");
            liveMatch.setBatter2Name("Rishabh Pant");
            liveMatch.setBatter2Score("45*(41)");
            liveMatch.setBowlerName("Pat Cummins");
            liveMatch.setBowlerStats("12.2-1-68-2");
            liveMatch.setTournament("BORDER-GAVASKAR TROPHY - 2025 TEST");
            liveMatch.setStartTime(LocalDateTime.now());

            matchRepository.save(liveMatch);
            System.out.println("Sample live match initialized");
        }
    }
}
