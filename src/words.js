import React, {Component} from 'react'

const Word = ({word}) => <span className="words-list__item">{word}</span>

export const WordsList = ({words, onClick}) => (<div className="words-list" onClick={onClick}>
    {
        words.map((word, i) =>
            (<span><Word word={word}/>{i !== words.length - 1 ? ', ' : '.'}</span>)
        )
    }
</div>)