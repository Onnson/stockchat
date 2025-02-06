# Product Context

## Why this project exists
StockChat aims to provide an AI-powered conversational interface for both traditional stock data (via yfinance + TA-Lib) and, moving forward, DeFi and on-chain crypto analytics (via DexScreener).  
Users can enter natural-language queries and receive comprehensive, real-time financial insight.

## What problems it solves
1. **Ambiguous Queries:** We plan to add a preliminary Q&A flow to clarify user requests before final analysis. This reduces confusion, ensuring we extract the correct ticker, time range, and analysis depth.  
2. **Limited Exploration:** Users currently see a single-layer AI response. Adding drilldown/follow-up features allows deeper "Technical" or "Fundamental" insights.  
3. **Lack of On-Chain Analysis:** Traditional tools don't handle DeFi data. With DexScreener integration, users can query on-chain token pairs and yield farming analytics, expanding StockChat's reach beyond traditional equities.

## How it should work
- **Conversation Flow**: A user enters an initial query. If incomplete, the system prompts clarifying questions to confirm which ticker or time window to use.  
- **Follow-up Drilldowns**: Users can click or prompt further to get more detail on each aspect of the analysis.  
- **On-Chain Crypto**: When the user query references on-chain tokens, the new DexScreener-based module fetches liquidity, volume, and price data just like yfinance does for equities.

## Core Functionality
- DSPy-powered financial analysis pipelines
- Real-time visualization of technical indicators
- Extensible data ingestion framework
- SQLite-based analysis result storage
- Data sharing capabilities
- Professional technical analysis via TA-Lib integration 