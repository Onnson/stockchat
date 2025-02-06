from pydantic import BaseModel
from typing import Dict, List, Optional

class StockAnalysisRequest(BaseModel):
    message: str

class StockAnalysisResponse(BaseModel):
    stockData: list
    analysisText: dict
    shareId: str

class ClarifyRequest(BaseModel):
    userQuery: str
    partialQuery: Dict[str, str] = {}

class ClarifyResponse(BaseModel):
    isComplete: bool
    questions: List[str]
    partialQuery: Dict[str, str] 