-- Sample data for Kumar Sangakkara and other players
-- This file will be executed automatically by Spring Boot

INSERT INTO players (name, country, birth_date, role, odi_runs, odi_best_score, odi_debut_date, odi_matches, odi_centuries, test_runs, test_best_score, test_debut_date, test_matches, test_centuries, first_class_runs, total_runs, catches, wickets, stumpings, fifties, batting_average, strike_rate) 
VALUES 
('Kumar Sangakkara', 'Sri Lanka', '1977-10-27', 'Wicket-keeper Batsman', 14234, 169, '2000-07-05', 404, 25, 12400, 319, '2000-07-20', 134, 38, 28016, 28016, 539, 0, 139, 93, 41.98, 78.86),
('Sachin Tendulkar', 'India', '1973-04-24', 'Batsman', 18426, 200, '1989-12-18', 463, 49, 15921, 248, '1989-11-15', 200, 51, 25396, 34357, 256, 154, 0, 164, 53.78, 86.23),
('Ricky Ponting', 'Australia', '1974-12-19', 'Batsman', 13704, 164, '1995-02-15', 375, 30, 13378, 257, '1995-12-08', 168, 41, 27483, 27483, 364, 0, 0, 137, 45.95, 80.39);

UPDATE players SET catches = 539, wickets = 0, stumpings = 139, fifties = 93, batting_average = 41.98, strike_rate = 78.86 WHERE name = 'Kumar Sangakkara';
UPDATE players SET catches = 256, wickets = 154, stumpings = 0, fifties = 164, batting_average = 53.78, strike_rate = 86.23 WHERE name = 'Sachin Tendulkar';
UPDATE players SET catches = 364, wickets = 0, stumpings = 0, fifties = 137, batting_average = 45.95, strike_rate = 80.39 WHERE name = 'Ricky Ponting';
