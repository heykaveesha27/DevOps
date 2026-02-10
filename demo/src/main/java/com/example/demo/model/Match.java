package com.example.demo.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Match {
    @Id @GeneratedValue
    private Long id;


    @ManyToOne
    private User createBy;

    private LocalDate date;
    private String venue;

    @ManyToOne
    private Team tossWinner;
}
