# System Patterns

## Architecture Overview
- Docker-containerized microservices
- FastAPI backend with DSPy integration
- React/TypeScript frontend with Shadcn UI
- SQLite database for analysis persistence
- Multi-provider AI support (OpenAI, DeepSeek, Gemini)

## Component Structure
- Frontend: React components with TypeScript
- Backend: FastAPI with service/repository pattern
- AI Layer: DSPy pipelines with multiple LLM support
- Data Layer: SQLite with SQLAlchemy ORM

## Key Technical Decisions
- DSPy for financial analysis pipelines
- TA-Lib for technical analysis
- yfinance for market data
- Docker for deployment
- Nginx for frontend serving

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