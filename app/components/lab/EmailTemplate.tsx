// Email template interfaces
interface EmailTemplateData {
  recipientName: string
  recipientEmail: string
  subjectMatter: string
  mainMessageContent: string
  senderName: string
  senderTitle: string
  senderEmail: string
  senderPhone: string
  ctaText?: string
  ctaLink?: string
  companyName?: string
  websiteUrl?: string
  logoUrl?: string
  socialLinks?: {
    linkedin?: string
    twitter?: string
    facebook?: string
    instagram?: string
  }
  footerLinks?: {
    privacyPolicy?: string
    unsubscribe?: string
  }
}

interface EmailTemplateOptions {
  includeCallToAction?: boolean
  headerTitle?: string
  footerText?: string
  primaryColor?: string
  secondaryColor?: string
}

class HaloEmailTemplate {
  private defaultData: Partial<EmailTemplateData> = {
    companyName: 'Halo',
    websiteUrl: 'https://www.halo.cl',
    logoUrl: 'https://www.halo.cl/images/logo.png'
  }

  private defaultOptions: EmailTemplateOptions = {
    includeCallToAction: true,
    headerTitle: 'Professional Communication',
    footerText: '© 2025 Halo. All rights reserved.',
    primaryColor: '#667eea',
    secondaryColor: '#764ba2'
  }

  /**
   * Generate HTML email template with provided data
   */
  public generateEmailHTML(data: EmailTemplateData, options: EmailTemplateOptions = {}): string {
    const mergedData = { ...this.defaultData, ...data }
    const mergedOptions = { ...this.defaultOptions, ...options }

    return this.buildEmailTemplate(mergedData, mergedOptions)
  }

  /**
   * Generate email template for N8N with placeholder variables
   */
  public generateN8NTemplate(
    staticData: Partial<EmailTemplateData> = {},
    options: EmailTemplateOptions = {}
  ): string {
    const n8nData: EmailTemplateData = {
      recipientName: '{{$json["recipientName"]}}',
      recipientEmail: '{{$json["recipientEmail"]}}',
      subjectMatter: '{{$json["subjectMatter"]}}',
      mainMessageContent: '{{$json["mainMessageContent"]}}',
      senderName: staticData.senderName || '{{$json["senderName"]}}',
      senderTitle: staticData.senderTitle || '{{$json["senderTitle"]}}',
      senderEmail: staticData.senderEmail || '{{$json["senderEmail"]}}',
      senderPhone: staticData.senderPhone || '{{$json["senderPhone"]}}',
      ctaText: staticData.ctaText || '{{$json["ctaText"]}}',
      ctaLink: staticData.ctaLink || '{{$json["ctaLink"]}}',
      ...this.defaultData,
      ...staticData
    }

    const mergedOptions = { ...this.defaultOptions, ...options }
    return this.buildEmailTemplate(n8nData, mergedOptions)
  }

  private buildEmailTemplate(data: EmailTemplateData, options: EmailTemplateOptions): string {
    const styles = this.generateStyles(options)
    const header = this.generateHeader(data, options)
    const content = this.generateContent(data, options)
    //   const signature = this.generateSignature(data)
    const footer = this.generateFooter(data, options)

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Professional Business Email</title>
    <style>${styles}</style>
</head>
<body>
    <div class="email-container">
        ${header}
        ${content}
        ${footer}
    </div>
</body>
</html>`
  }

  private generateStyles(options: EmailTemplateOptions): string {
    return `
        /* Reset styles for email clients */
        body, table, td, p, a, li, blockquote {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
        
        table, td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        img {
            -ms-interpolation-mode: bicubic;
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
        }
        
        /* Main styles */
        body {
            margin: 0 !important;
            padding: 0 !important;
            background-color: #f4f4f4;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333333;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .header {
            background: linear-gradient(135deg, ${options.primaryColor} 0%, ${options.secondaryColor} 100%);
            padding: 30px 40px;
            text-align: center;
        }
        
        .logo {
            max-width: 200px;
            height: auto;
            margin-bottom: 15px;
        }
        
        .header-title {
            color: #ffffff;
            font-size: 24px;
            font-weight: 300;
            margin: 0;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .content {
            padding: 40px;
        }
        
        .greeting {
            font-size: 18px;
            color: #2c3e50;
            margin-bottom: 20px;
            font-weight: 500;
        }
        
        .message-body {
            font-size: 16px;
            line-height: 1.8;
            color: #555555;
            margin-bottom: 30px;
        }
        
        .message-body p {
            margin-bottom: 16px;
        }
        
        .cta-section {
            text-align: center;
            margin: 35px 0;
        }
        
        .cta-button {
            display: inline-block;
            padding: 15px 30px;
            background: linear-gradient(135deg, ${options.primaryColor} 0%, ${options.secondaryColor} 100%);
            color: #ffffff !important;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 16px;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }
        
        .divider {
            height: 1px;
            background: linear-gradient(to right, transparent, #e0e0e0, transparent);
            margin: 30px 0;
        }
        
        .signature {
            border-top: 2px solid #f0f0f0;
            padding-top: 25px;
            margin-top: 30px;
        }
        
        .signature-content {
            display: flex;
            align-items: center;
            gap: 20px;
        }
        
        .signature-logo {
            width: 60px;
            height: 60px;
            border-radius: 8px;
            object-fit: contain;
        }
        
        .signature-details {
            flex: 1;
        }
        
        .signature-name {
            font-size: 18px;
            font-weight: 600;
            color: #2c3e50;
            margin-bottom: 5px;
        }
        
        .signature-title {
            font-size: 14px;
            color: #7f8c8d;
            margin-bottom: 8px;
        }
        
        .signature-contact {
            font-size: 14px;
            color: #555555;
            line-height: 1.4;
        }
        
        .signature-contact a {
            color: ${options.primaryColor};
            text-decoration: none;
        }
        
        .footer {
            background-color: #2c3e50;
            color: #ecf0f1;
            padding: 25px 40px;
            text-align: center;
            font-size: 14px;
        }
        
        .footer-links {
            margin-bottom: 15px;
        }
        
        .footer-links a {
            color: #ecf0f1;
            text-decoration: none;
            margin: 0 15px;
            font-weight: 500;
        }
        
        .footer-links a:hover {
            color: ${options.primaryColor};
        }
        
        .social-links {
            margin: 20px 0 15px 0;
        }
        
        .social-link {
            display: inline-block;
            width: 36px;
            height: 36px;
            background-color: #34495e;
            border-radius: 50%;
            text-align: center;
            line-height: 36px;
            margin: 0 8px;
            color: #ecf0f1;
            text-decoration: none;
            font-weight: bold;
        }
        
        .footer-text {
            font-size: 12px;
            color: #95a5a6;
            margin-top: 15px;
        }
        
        /* Responsive design */
        @media screen and (max-width: 600px) {
            .email-container {
                width: 100% !important;
                max-width: 100% !important;
            }
            
            .header, .content, .footer {
                padding: 20px !important;
            }
            
            .signature-content {
                flex-direction: column;
                text-align: center;
            }
            
            .header-title {
                font-size: 20px;
            }
            
            .greeting {
                font-size: 16px;
            }
            
            .message-body {
                font-size: 14px;
            }
        }
    `
  }

  private generateHeader(data: EmailTemplateData, options: EmailTemplateOptions): string {
    return `
        <div class="header">
            <img src="${data.logoUrl}" alt="${data.companyName} Logo" class="logo">
            <h1 class="header-title">${options.headerTitle}</h1>
        </div>
    `
  }

  private generateContent(data: EmailTemplateData, options: EmailTemplateOptions): string {
    const ctaSection =
      options.includeCallToAction && data.ctaText && data.ctaLink
        ? `
            <div class="cta-section">
                <a href="${data.ctaLink}" class="cta-button">${data.ctaText}</a>
            </div>
        `
        : ''

    return `
        <div class="content">
            <div class="greeting">
                Hello ${data.recipientName},
            </div>
            
            <div class="message-body">
                <p>We hope this message finds you well. We wanted to reach out to you regarding ${
                  data.subjectMatter
                }.</p>
                
                <div>${data.mainMessageContent}</div>
                
                <p>We believe this will be of great value to you and your business. Please don't hesitate to reach out if you have any questions or would like to discuss this further.</p>
            </div>
            
            ${ctaSection}
            
            <div class="divider"></div>
            
            ${this.generateSignature(data)}
        </div>
    `
  }

  private generateSignature(data: EmailTemplateData): string {
    return `
        <div class="signature">
            <div class="signature-content">
                <img src="${data.logoUrl}" alt="Company Logo" class="signature-logo">
                <div class="signature-details">
                    <div class="signature-name">${data.senderName}</div>
                    <div class="signature-title">${data.senderTitle} | ${data.companyName}</div>
                    <div class="signature-contact">
                        📧 <a href="mailto:${data.senderEmail}">${data.senderEmail}</a><br>
                        📱 <a href="tel:${data.senderPhone}">${data.senderPhone}</a><br>
                        🌐 <a href="${data.websiteUrl}">${data.websiteUrl}</a>
                    </div>
                </div>
            </div>
        </div>
    `
  }

  private generateFooter(data: EmailTemplateData, options: EmailTemplateOptions): string {
    const socialLinks = data.socialLinks
      ? `
        <div class="social-links">
            ${
              data.socialLinks.linkedin
                ? `<a href="${data.socialLinks.linkedin}" class="social-link">in</a>`
                : ''
            }
            ${
              data.socialLinks.twitter
                ? `<a href="${data.socialLinks.twitter}" class="social-link">tw</a>`
                : ''
            }
            ${
              data.socialLinks.facebook
                ? `<a href="${data.socialLinks.facebook}" class="social-link">fb</a>`
                : ''
            }
            ${
              data.socialLinks.instagram
                ? `<a href="${data.socialLinks.instagram}" class="social-link">ig</a>`
                : ''
            }
        </div>
    `
      : ''

    const footerLinks = data.footerLinks
      ? `
        <div class="footer-links">
            <a href="${data.websiteUrl}">Website</a>
            ${
              data.footerLinks.privacyPolicy
                ? `<a href="${data.footerLinks.privacyPolicy}">Privacy Policy</a>`
                : ''
            }
            ${
              data.footerLinks.unsubscribe
                ? `<a href="${data.footerLinks.unsubscribe}">Unsubscribe</a>`
                : ''
            }
        </div>
    `
      : `
        <div class="footer-links">
            <a href="${data.websiteUrl}">Website</a>
        </div>
    `

    return `
        <div class="footer">
            ${footerLinks}
            ${socialLinks}
            <div class="footer-text">
                ${options.footerText}<br>
                This email was sent to ${data.recipientEmail}. If you no longer wish to receive these emails, please unsubscribe.
            </div>
        </div>
    `
  }
}

// Usage Examples
export default HaloEmailTemplate

// Example 1: Basic usage with static data
export function generateBasicEmail(): string {
  const emailTemplate = new HaloEmailTemplate()

  const emailData: EmailTemplateData = {
    recipientName: 'John Doe',
    recipientEmail: 'john.doe@example.com',
    subjectMatter: 'our new product launch',
    mainMessageContent:
      '<p>We are excited to introduce our latest innovation that will revolutionize your workflow. This new solution offers enhanced productivity and seamless integration with your existing systems.</p><p>Key benefits include:</p><ul><li>50% faster processing times</li><li>Advanced security features</li><li>24/7 customer support</li></ul>',
    senderName: 'Maria Rodriguez',
    senderTitle: 'Sales Manager',
    senderEmail: 'maria@halo.cl',
    senderPhone: '+56 2 1234 5678',
    ctaText: 'Learn More',
    ctaLink: 'https://www.halo.cl/products'
  }

  return emailTemplate.generateEmailHTML(emailData)
}

// Example 2: N8N template with dynamic variables
export function generateN8NEmailTemplate(): string {
  const emailTemplate = new HaloEmailTemplate()

  // Static data that won't change
  const staticData: Partial<EmailTemplateData> = {
    senderName: 'Maria Rodriguez',
    senderTitle: 'Sales Manager',
    senderEmail: 'maria@halo.cl',
    senderPhone: '+56 2 1234 5678',
    ctaText: 'Get Started'
  }

  return emailTemplate.generateN8NTemplate(staticData)
}

// Example 3: Custom styled email
export function generateCustomStyledEmail(): string {
  const emailTemplate = new HaloEmailTemplate()

  const emailData: EmailTemplateData = {
    recipientName: 'Sarah Johnson',
    recipientEmail: 'sarah@company.com',
    subjectMatter: 'partnership opportunities',
    mainMessageContent:
      '<p>We believe there are excellent synergies between our companies and would love to explore potential collaboration opportunities.</p>',
    senderName: 'Carlos Mendez',
    senderTitle: 'Business Development Director',
    senderEmail: 'carlos@halo.cl',
    senderPhone: '+56 2 9876 5432',
    ctaText: 'Schedule Meeting',
    ctaLink: 'https://calendly.com/carlos-halo',
    socialLinks: {
      linkedin: 'https://linkedin.com/company/halo',
      twitter: 'https://twitter.com/halo'
    },
    footerLinks: {
      privacyPolicy: 'https://www.halo.cl/privacy',
      unsubscribe: 'https://www.halo.cl/unsubscribe'
    }
  }

  const customOptions: EmailTemplateOptions = {
    headerTitle: 'Partnership Opportunity',
    primaryColor: '#e74c3c',
    secondaryColor: '#c0392b',
    includeCallToAction: true
  }

  return emailTemplate.generateEmailHTML(emailData, customOptions)
}
