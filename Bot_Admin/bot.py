from enum import Enum
import os 

class RunningMode(str, Enum):
    LONG_POLLING = "LONG_POLLING"
    WEBHOOK = "WEBHOOK"

TG_TOKEN = os.getenv("TG_TOKEN", cast = str)

RUNNING_MODE = os.getenv("RUNNING_MODE", cast = RunningMode, 
                            default = RunningMode.LONG_POLLING)

WEBHOOK_URL = os.getenv("WEBHOOK_URL", cast = str, default = "")
