import { onRequest } from "firebase-functions/v2/https";
import { setGlobalOptions } from "firebase-functions/v2";
import axios from "axios";
import type { Request, Response } from "express";

setGlobalOptions({ maxInstances: 10 });

const PIXEL_ID = "709914178793810";
const ACCESS_TOKEN = "YOUR_ACCESS_TOKEN";

export const metaConversion = onRequest(
  { region: "europe-west2" },
  async (req: Request, res: Response) => {
    try {
      const eventData = {
        data: [
          {
            event_name: "PageView",
            event_time: Math.floor(Date.now() / 1000),
            action_source: "website",
            event_source_url: "https://stakemaster.co.uk",
            custom_data: {
              currency: "GBP",
              value: 0.0,
            },
          },
        ],
      };

      const url = `https://graph.facebook.com/v20.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;
      const response = await axios.post(url, eventData);

      res.status(200).send(response.data);
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  }
);
