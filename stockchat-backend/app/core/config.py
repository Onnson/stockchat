from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    API_V1_STR: str = "/api/v1"
    PROJECT_NAME: str = "Chatrade"
    
    # Allow both local development and production domains
    BACKEND_CORS_ORIGINS: list[str] = [
        "http://localhost:5173",  # Local development
        "http://localhost:3000",  # Alternative local port
        "https://*.netlify.app",  # Netlify domains
        "https://chatrade.app",   # Production domain
    ]
    
    # Add Railway-specific settings
    PORT: int = 8000  # Default port, can be overridden by Railway
    
    class Config:
        case_sensitive = True

settings = Settings() 