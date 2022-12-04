package com.example.demo1.service;

import com.example.demo1.model.Card;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ICardService {
    Page<Card> listCard(Pageable pageable);
}
