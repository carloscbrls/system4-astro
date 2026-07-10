// Netlify function: Send form submission email notification to jcastillo@system4.com
// Triggered by Netlify Forms submission event

exports.handler = async (event, context) => {
  // Only accept POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body || '{}');
    const { payload } = data;

    if (!payload || !payload.data) {
      return { statusCode: 400, body: 'Invalid payload' };
    }

    const { name, email, phone, service, city, message, company, facility_size } = payload.data;
    const formName = payload.form_name || 'contact';

    // Log the submission for monitoring
    console.log(`[Form Submission] ${formName}: ${name} (${email}) - ${service || 'N/A'}`);

    // Netlify Forms already handles storage and notifications.
    // This function logs for monitoring. Email forwarding is configured
    // in the Netlify dashboard: Site settings > Forms > Form notifications > Email
    // Set to: jcastillo@system4.com

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true, form: formName })
    };
  } catch (error) {
    console.error('[Form Handler Error]', error);
    return { statusCode: 500, body: 'Internal Server Error' };
  }
};