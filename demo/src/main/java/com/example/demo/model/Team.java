package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity
public class Team {
    @Id @GeneratedValue
    private Long id;
    private String name;

    @ManyToOne
    private Team team;
}
