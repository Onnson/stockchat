# techContext

## Technologies used
- **FastAPI** (Python) for serving the backend.  
- **React (TypeScript)** for frontend UI logic.  
- **TA-Lib** for technical analysis on stock data.  
- **DSPy** for language understanding and generation.  
- **DexScreener** (planned) for on-chain analytics.

## Development setup
- Each service runs in Docker (see docker-compose.yml).  
- For local dev, you can run `uvicorn` for backend and `npm run dev` for frontend.  
- TA-Lib must be installed system-wide or in a suitable Python environment before building.

## Technical constraints
- DSPy must parse ambiguous queries. The Q&A stage helps provide structure.  
- On-chain analysis requires new HTTP calls to DexScreener's API.  
- The system should remain extensible for further data sources.

## Frontend Stack
- React
- TypeScript
- TailwindCSS
- Vite
- Shadcn UI components

## Backend Stack
- FastAPI
- Python
- DSPy
- TA-Lib
- SQLite

## External Dependencies
- OpenAI API (optional)
- DeepSeek API (optional)
- Gemini API (optional)
- GitHub API (optional)

## Development Setup Requirements
- Docker for containerized deployment
- TA-Lib installation required for local development
- Environment variables configuration (.env file)
- Node.js for frontend development
- Python virtual environment for backend

## Current Technical Constraints
- React type declarations need to be properly configured
- Async operations in FastAPI need refinement
- Stock data validation requires proper error handling
- Frontend dependencies need resolution

Additional Requirements:
- React type declarations (@types/react)
- Updated TypeScript configuration
- Proper async/await implementation in FastAPI 