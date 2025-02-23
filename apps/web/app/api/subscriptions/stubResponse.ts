import { SubscriptionResponse } from "./route";

export const stubResponse: SubscriptionResponse = {
    "source": "External ABC",
    "subscriptions": [
        {
            "id": "123456789_A",
            "brand": "AD",
            "formula": "AD_P",
            "status": "ACTIVE",
            "sync": "IN_SYNC"
        },
        {
            "id": "123456789_B",
            "brand": "HLN",
            "formula": "HLN_D",
            "status": "SUSPENDED",
            "sync": "OUT_OF_SYNC"
        },
        {
            "id": "123456789_C",
            "brand": "VK",
            "formula": "VK_C",
            "status": "EXPIRED",
            "sync": "NOT_FOUND_S2"
        },
        {
            "id": "123456789_C",
            "brand": "PAR",
            "formula": "PAR_P",
            "status": "EXPIRED",
            "sync": "NOT_FOUND_TEMPTATION"
        },
        {
            "id": "123456789_D",
            "brand": "PAR",
            "formula": "PAR_P",
            "status": "ACTIVE",
            "sync": "IN_SYNC"
        },
        {
            "id": "123456789_E",
            "brand": "AD",
            "formula": "AD_E",
            "status": "ACTIVE",
            "sync": "IN_SYNC"
        }
    ]
};
