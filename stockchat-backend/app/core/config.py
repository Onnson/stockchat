from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    API_V1_STR: str = "/api/v1"
    PROJECT_NAME: str = "StockChat"
    
    # Allow both local development and production Netlify domain
    BACKEND_CORS_ORIGINS: list[str] = [
        "http://localhost:5173",  # Local development
        "http://localhost:3000",  # Alternative local port
        "https://*.netlify.app",  # Netlify domains
    ]
    
    # Add Railway-specific settings
    PORT: int = 8000  # Default port, can be overridden by Railway
    
    class Config:
        case_sensitive = True

settings = Settings() 