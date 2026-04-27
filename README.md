
# phasma-like disease investigation
**WEB-115 Final Project Proposal**
Student: Tristan Owen | Repo: `WEB-115_FinalProject_Owen`

---

## Overview

This is a phasmophobia like game where the user must identify diseases using clues they collect using there tools. They will use this information to take preventative measures to keep themselves from becoming infected. the user starts with a manuel containing comprehensive information on every disease in  the game to help them. after each 'round' of investigation (the phase where the user uses tools to learn things about the disease), the user has the oppurtunity to equip a preventative option to delay disease accquisition. after this phase the user will be exposed to the mystery disease and if they misidentified the disease's transmission methods than they could become infected abnd lose. After the user has succesfully warded off every infection encounter, they must guess the disease to win the game. 

---

## Features

- randomly selected "opponent" disease 
- full guidebook to help user learn the disease
- investigative phase to use tools and learn info about the disease
- chance to take preventative measures to prevent infection
- disease encounter that risks end of run (going to use HTML canvas to make anonymous disease image to display during this)
- round system that repeats these phases until all transfer methods of disease have been succesfully blocked
- final guess of what the disease was to win the game 

---

## Core Requirements Coverage

| Requirement | Implementation |
|---|---|
| **If Statements & Loops** | If statements will be neccesary for checking conditions in game functions and correctness in final guess. Looping will be neccesary to make sure the game loop continues until all disease transmission methods have been one after the other prevented, which gives user time to find info to deduce disease identity |
| **Event Listeners** | Both movbing through pages in the disease info book and selecting tools during the investigation phase will require event listeners |
| **DOM Element Creation** | DOM element creation will be neccesary to ensure that tools and disease encounter elements show up during the correct phases and are not present on screen during other processes|
| **Classes & Subclasses** | the disease class will allow for the creation of all the potential diseases all with the same standardized info layout. The disease behavior subclass will take information from the disease class and the resulting object will have info and methods stored to dictate disease behavior during player interactions. |

---

## DLC — Additional Topics

### HTML Canvas
I need a unique placeholder image for the disease during the disease encounter that doesn't give away any information about the current disease, but still looks disease-ish. So i'm going to make my own with HTML canvas.  

---

## Tech Stack

- HTML, CSS, JavaScript
- HTML Canvas for disease encounter image rendering
- VS Code + GitHub