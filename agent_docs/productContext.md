# Product Context

## Why this project exists
StockChat is an AI-powered conversational interface for financial analysis, combining traditional stock data (via yfinance + TA-Lib) with plans for DeFi and on-chain crypto analytics (via DexScreener). Users can enter natural-language queries to receive comprehensive, real-time financial insights.

## What problems it solves
1. Ambiguous Queries: Implements a Q&A flow to clarify user requests before analysis
2. Limited Exploration: Provides multi-layer AI responses with drilldown capabilities
3. Lack of On-Chain Analysis: Plans to integrate DexScreener for DeFi data analysis

## How it should work
- User enters a query about a stock
- System processes query through DSPy pipeline
- Fetches real-time data from yfinance
- Performs technical analysis using TA-Lib
- Generates comprehensive analysis with AI
- Presents results with interactive visualizations
- Allows sharing via unique URLs

## Core Functionality
- DSPy-powered financial analysis pipelines
- Real-time visualization of technical indicators
- Extensible data ingestion framework
- SQLite-based analysis result storage
- Data sharing capabilities
- Professional technical analysis via TA-Lib integration 