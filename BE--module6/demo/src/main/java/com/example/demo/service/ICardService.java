package com.example.demo.service;

import com.example.demo.model.Card;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ICardService {
    Page<Card> listCard(Pageable pageable);
}
