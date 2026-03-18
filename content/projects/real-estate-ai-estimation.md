---
title: "Real Estate AI Estimation"
description: "End to end web app that estimates whether a home is under valued or over valued and explains the drivers with maps, charts, and comparable homes."
date: 2025-11-26
---

I built an ML powered real estate pricing estimation product end to end  
From requirements and database design to a production ready frontend, backend APIs, and AWS deployment  
The app helps users search homes by ZIP code, explore listings on an interactive map, and open a detail view that explains estimated value using charts and feature level signals

## What it does

- **Search and discovery**
  - Search by ZIP code with a fast listing experience
  - Filter by price range, beds, baths, and property type
  - Browse results as cards and as pins on Google Maps

- **Property detail experience**
  - Image carousel and listing summary
  - Under valued vs over valued gauge with an estimated price readout
  - Utility cost trends rendered from a forecast dataset
  - Property sale history table
  - Nearest school distance table
  - Key feature signals and a comparable homes block based on nearest matching values

## Architecture and implementation

- **Frontend**
  - React SPA with componentized UI
  - Tailwind CSS for design system styling and layout
  - Ant Design for structured layout primitives and form controls
  - Google Maps integration for map based discovery
  - Data visualizations for pricing and utility trends

- **Backend and data**
  - Node.js based API layer deployed as AWS Lambda behind API Gateway
  - DynamoDB tables for property features, sales history, and ZIP level scoring
  - Amazon S3 hosted datasets used by the frontend for utility cost charting

- **Product and delivery**
  - I owned the build end to end including database design, integration work, and deployment
  - Prototyped parts of the data workflow with Supabase during early iterations and carried those learnings into the final production design
  - Delivered within the agreed timeline with a strong focus on stability and UX polish

## Skills and deliverables

- React
- Node.js
- AWS Lambda
- Amazon API Gateway
- Tailwind UI and Tailwind CSS
- Amazon S3
- Database design
- Deployment and release ownership

## Screenshots

![Property detail page with valuation gauge and value history](/img/Screenshot%202026-03-18%20at%2012.12.19%E2%80%AFPM.png)

![House statistics and utility cost charts](/img/Screenshot%202026-03-18%20at%2012.12.25%E2%80%AFPM.png)

![Search results with map pins and filters](/img/Screenshot%202026-03-18%20at%2012.12.33%E2%80%AFPM.png)
