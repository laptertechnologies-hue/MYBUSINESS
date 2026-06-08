export async function initiateMarzPayCollection({
  amount,
  phoneNumber,
  reference,
  method = 'mobile_money',
  description,
  callbackUrl,
}: {
  amount: number;
  phoneNumber?: string;
  reference: string;
  method?: 'mobile_money' | 'card';
  description?: string;
  callbackUrl?: string;
}) {
  const MARZPAY_API_URL = 'https://wallet.wearemarz.com/api/v1/collect-money';
  const BASE64_AUTH_HEADER = process.env.MARZPAY_BASE64_AUTH;

  if (!BASE64_AUTH_HEADER) {
    throw new Error('MarzPay API credentials are not configured.');
  }

  const payload: Record<string, any> = {
    amount,
    country: 'UG',
    reference,
    method,
  };

  if (method === 'mobile_money' && phoneNumber) {
    payload.phone_number = phoneNumber;
  }
  
  if (description) payload.description = description;
  if (callbackUrl) payload.callback_url = callbackUrl;

  // The documentation showed examples of x-www-form-urlencoded and JSON for cards. 
  // We'll use JSON for both to be consistent, but check if API supports it.
  const response = await fetch(MARZPAY_API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${BASE64_AUTH_HEADER}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`MarzPay API error: ${errorText}`);
  }

  const data = await response.json();
  return data;
}
