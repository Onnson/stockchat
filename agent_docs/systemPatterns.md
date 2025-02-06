# System Patterns

## Architecture Overview
The system follows a modern web application architecture with:
- Containerized microservices (Docker)
- REST API backend
- React-based SPA frontend
- SQLite database for persistence
- AI integration through multiple provider options

## Component Structure
- Frontend components organized by feature
- UI components separated from business logic
- Utility functions isolated in dedicated modules
- Theme management system
- API client abstraction

## Key Technical Decisions
- Use of DSPy for financial analysis pipelines
- Multiple AI provider support (OpenAI, DeepSeek, Gemini)
- Docker-based deployment for consistency
- SQLite for lightweight data storage
- Component-based frontend architecture 

## How the system is built
- **FastAPI Backend** for handling requests and serving analysis (stock or crypto).  
- **React Frontend** for the chat interface, results display, and (coming soon) interactive follow-up prompts.  
- **DSPy** for natural-language query parsing and generative text blocks.

## Key technical decisions
- **yfinance + TA-Lib** for stock tickers. Next step: **DexScreener** for on-chain tokens.  
- The new Q&A pre-processing stage will be an optional layer before the main stock (or crypto) analysis.  
- Drilldown/follow-up queries will reuse the same StockService (or future CryptoService) pipeline with additional context.

## Architecture patterns
1. **Layered Approach**  
   - Pre-analysis (Q&A) → Core Analysis → Post-analysis (drilldown).  
2. **Contextual DSPy**  
   - Reuse a conversation ID or shareId to store partial context.  
3. **Modular Data Fetch**  
   - Traditional stocks call yfinance; on-chain tokens call DexScreener.  
   - Common interface for downstream computations (TA-Lib, or custom logic). 