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

            playerRepository.save(sangakkara);

            System.out.println("Sample data initialized with Kumar Sangakkara");
        }
    }
}
