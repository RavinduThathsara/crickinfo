package com.cricket.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDateTime;

@Entity
@Table(name = "matches")
public class Match {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String team1;
    private String team2;
    private String team1Flag;
    private String team2Flag;
    private String team1Score;
    private String team2Score;
    private String status;
    private boolean live;
    private String overs;
    private String currentRunRate;
    private String batter1Name;
    private String batter1Score;
    private String batter2Name;
    private String batter2Score;
    private String bowlerName;
    private String bowlerStats;
    private String tournament;
    private LocalDateTime startTime;

    public Match() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTeam1() {
        return team1;
    }

    public void setTeam1(String team1) {
        this.team1 = team1;
    }

    public String getTeam2() {
        return team2;
    }

    public void setTeam2(String team2) {
        this.team2 = team2;
    }

    public String getTeam1Flag() {
        return team1Flag;
    }

    public void setTeam1Flag(String team1Flag) {
        this.team1Flag = team1Flag;
    }

    public String getTeam2Flag() {
        return team2Flag;
    }

    public void setTeam2Flag(String team2Flag) {
        this.team2Flag = team2Flag;
    }

    public String getTeam1Score() {
        return team1Score;
    }

    public void setTeam1Score(String team1Score) {
        this.team1Score = team1Score;
    }

    public String getTeam2Score() {
        return team2Score;
    }

    public void setTeam2Score(String team2Score) {
        this.team2Score = team2Score;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public boolean isLive() {
        return live;
    }

    public void setLive(boolean live) {
        this.live = live;
    }

    public String getOvers() {
        return overs;
    }

    public void setOvers(String overs) {
        this.overs = overs;
    }

    public String getCurrentRunRate() {
        return currentRunRate;
    }

    public void setCurrentRunRate(String currentRunRate) {
        this.currentRunRate = currentRunRate;
    }

    public String getBatter1Name() {
        return batter1Name;
    }

    public void setBatter1Name(String batter1Name) {
        this.batter1Name = batter1Name;
    }

    public String getBatter1Score() {
        return batter1Score;
    }

    public void setBatter1Score(String batter1Score) {
        this.batter1Score = batter1Score;
    }

    public String getBatter2Name() {
        return batter2Name;
    }

    public void setBatter2Name(String batter2Name) {
        this.batter2Name = batter2Name;
    }

    public String getBatter2Score() {
        return batter2Score;
    }

    public void setBatter2Score(String batter2Score) {
        this.batter2Score = batter2Score;
    }

    public String getBowlerName() {
        return bowlerName;
    }

    public void setBowlerName(String bowlerName) {
        this.bowlerName = bowlerName;
    }

    public String getBowlerStats() {
        return bowlerStats;
    }

    public void setBowlerStats(String bowlerStats) {
        this.bowlerStats = bowlerStats;
    }

    public String getTournament() {
        return tournament;
    }

    public void setTournament(String tournament) {
        this.tournament = tournament;
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }
}
