package com.cricket.config;

import com.cricket.entity.Player;
import com.cricket.repository.PlayerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.time.LocalDate;

@Component
public class DataInitializer implements CommandLineRunner {

    private final PlayerRepository playerRepository;

    public DataInitializer(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
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
            sangakkara.setCatches(539);
            sangakkara.setWickets(0);
            sangakkara.setStumpings(139);
            sangakkara.setFifties(93);
            sangakkara.setBattingAverage(41.98);
            sangakkara.setStrikeRate(78.86);

            playerRepository.save(sangakkara);

            System.out.println("Sample data initialized with Kumar Sangakkara");
        }

        Player existingSangakkara = playerRepository.findByNameIgnoreCase("Kumar Sangakkara");
        if (existingSangakkara != null && existingSangakkara.getCatches() == null) {
            existingSangakkara.setCatches(539);
            existingSangakkara.setWickets(0);
            existingSangakkara.setStumpings(139);
            existingSangakkara.setFifties(93);
            existingSangakkara.setBattingAverage(41.98);
            existingSangakkara.setStrikeRate(78.86);
            playerRepository.save(existingSangakkara);
        }
    }
}
