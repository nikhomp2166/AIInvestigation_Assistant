# AI Investigation Assistant

A modular web application for the Royal Thai Police (Nikhompattana Police Station) that provides AI-assisted tools for investigation, evidence analysis, interrogation, and predictive policing.

## Features

- **Data Analysis & Processing**: Upload and analyze evidence, visualize connections, and extract entities.
- **Interrogation Support**: Real-time speech-to-text, transcript formatting using LLM, and Google Sheets integration.
- **Case Management**: Dashboard with notifications, automated reporting, and document intelligence.
- **Predictive Policing**: Crime hotspot heatmap.

## Technology Stack

- **Frontend**: React.js + Tailwind CSS
- **Backend**: FastAPI (Python)
- **Database**: PostgreSQL
- **Authentication**: JWT with role-based access
- **Deployment**: Docker, docker-compose

## Development

1. Clone the repository:

   ```bash
   git clone https://github.com/nikhomp2166/AIInvestigation_Assistant.git
   cd AIInvestigation_Assistant
   ```

2. Start services:

   ```bash
   docker-compose up --build
   ```

3. Frontend at http://localhost:5173  
   Backend at http://localhost:8000

## Notes

- Integrate your actual API keys for Google Cloud Vision, Gemini, and Google Sheets as needed.
- This is a starter skeleton. Expand features as needed for production.