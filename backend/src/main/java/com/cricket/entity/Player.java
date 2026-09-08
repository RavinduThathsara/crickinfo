package com.cricket.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;

@Entity
@Table(name = "players")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Player {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    private String country;
    private LocalDate birthDate;
    private String role;
    
    @Column(name = "odi_runs")
    private Integer odiRuns;
    
    @Column(name = "odi_best_score")
    private Integer odiBestScore;
    
    @Column(name = "odi_debut_date")
    private LocalDate odiDebutDate;
    
    @Column(name = "odi_matches")
    private Integer odiMatches;
    
    @Column(name = "test_runs")
    private Integer testRuns;
    
    @Column(name = "test_best_score")
    private Integer testBestScore;
    
    @Column(name = "test_debut_date")
    private LocalDate testDebutDate;
    
    @Column(name = "test_matches")
    private Integer testMatches;
    
    @Column(name = "first_class_runs")
    private Integer firstClassRuns;
    
    @Column(name = "total_runs")
    private Integer totalRuns;
    
    @Column(name = "odi_centuries")
    private Integer odiCenturies;
    
    @Column(name = "test_centuries")
    private Integer testCenturies;

    private Integer catches;
    private Integer wickets;
    private Integer stumpings;
    private Integer fifties;
    private Double battingAverage;
    private Double strikeRate;
    
    private String imageUrl;
}
