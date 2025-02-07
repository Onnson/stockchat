# Technical Context

## Technologies Used
### Frontend
- React 18 with TypeScript
- TailwindCSS
- Vite
- Shadcn UI components

### Backend
- FastAPI (Python)
- DSPy for AI pipelines
- TA-Lib for technical analysis
- SQLite with SQLAlchemy
- Multiple AI provider support

## Development Setup
- Docker containers for services
- Nginx configuration for frontend
- Local development with uvicorn/vite
- Environment variables for API keys

## Technical Constraints
- Requires at least one AI provider API key
- TA-Lib system-level installation needed
- Minimum data requirements for analysis

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