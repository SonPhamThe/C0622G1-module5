package com.example.demo.repository;

import com.example.demo.model.HouseCar;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HouseCarRepository extends JpaRepository<HouseCar, Integer> {
}
