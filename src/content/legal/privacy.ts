/**
 * Política de Privacidade, versionada (privacy-and-consent LGPD-01/02/03/04).
 *
 * `version` de `PRIVACY_VERSIONS[0]` é um espelho manual de
 * `PRIVACY_POLICY_VERSION` em `apps/api/src/legal/legal-texts.constants.ts`,
 * e `MEDIA_CONSENT_HISTORY` abaixo é um espelho manual de
 * `LOCATION_MEDIA_CONSENT_HISTORY` em
 * `apps/api/src/public-form/location-media-consent.ts` — este workspace não
 * tem lib compartilhada entre `apps/api` e `apps/site` (AD-011), então as
 * duas cópias precisam ser trocadas juntas por quem publicar uma nova
 * versão de qualquer um dos dois lados.
 */

export interface LegalSection {
  heading?: string;
  paragraphs: string[];
}

export interface LegalDocumentVersion {
  version: string;
  publishedAt: string;
  sections: LegalSection[];
}

/**
 * Espelho manual de `LOCATION_MEDIA_CONSENT_HISTORY`. A versão atual é
 * sempre o último elemento — igual à fonte em `apps/api`.
 */
export const MEDIA_CONSENT_HISTORY: { version: string; text: string }[] = [
  {
    version: '2026-09-11.v1',
    text: 'Autorizo que as fotos e vídeos enviados sejam usados para melhorar e treinar os sistemas da plataforma. Esta autorização é opcional: seu orçamento é atendido normalmente sem ela.',
  },
];

export const PRIVACY_VERSIONS: LegalDocumentVersion[] = [
  {
    version: '2026-09-14.v1',
    publishedAt: '14 de setembro de 2026',
    sections: [
      {
        heading: '1. Quem é quem: controlador e operador',
        paragraphs: [
          'Quando você contrata a OrçaAI, você — o prestador de serviço — é o controlador dos dados pessoais dos seus clientes finais: é você quem decide coletar esses dados e para quê. A OrçaAI é a operadora: trata esses dados apenas para prestar o serviço que você contratou (conduzir a conversa, montar o orçamento, gerar o documento), conforme suas instruções.',
          'Se você ligar a captura de mídia do local do serviço nas configurações, você continua sendo o controlador dessas fotos e vídeos — a tela de configuração avisa isso no momento em que a opção é ligada.',
        ],
      },
      {
        heading: '2. O que é coletado',
        paragraphs: [
          'Do prestador (você): nome, e-mail, senha (com hash, nunca em texto puro), nome e slug do negócio, número de WhatsApp conectado, catálogo de produtos e regras de preço.',
          'Do cliente final (a pessoa que pede o orçamento): nome, telefone, e-mail e endereço, quando fornecidos; as respostas dadas na conversa do WhatsApp ou no formulário público; e, quando o prestador liga a opção, foto e/ou vídeo do local do serviço.',
        ],
      },
      {
        heading: '3. Para que cada dado é usado',
        paragraphs: [
          'Os dados do cliente final são usados exclusivamente para montar e entregar o orçamento pedido a esse prestador.',
          'Foto e vídeo do local, especificamente, também podem ser reutilizados para melhorar e treinar os sistemas da OrçaAI — mas só quando o cliente final marca esse consentimento explicitamente no formulário, e só naquela versão do texto de consentimento que ele leu. Recusar não muda em nada o atendimento do orçamento.',
        ],
      },
      {
        heading: '4. Por quanto tempo os dados ficam guardados',
        paragraphs: [
          'Hoje a retenção é indefinida: não há uma rotina automática que apague dados de orçamentos antigos por tempo decorrido. Essa é uma escolha de produto, não um esquecimento — orçamentos antigos continuam servindo de histórico para o prestador.',
          'Isso não impede a exclusão a pedido: o prestador pode, a qualquer momento, excluir os dados pessoais de um orçamento específico (mídia, PDF gerado e os campos de identificação do cliente) diretamente na tela de revisão daquele orçamento, sem depender de suporte técnico.',
        ],
      },
      {
        heading: '5. Com quem os dados são compartilhados',
        paragraphs: [
          'Com prestadores de infraestrutura que operam o serviço em nome da OrçaAI — hospedagem, armazenamento de arquivos (fotos, vídeos, PDFs) e envio de mensagens pela API do WhatsApp — sob contrato e apenas na medida necessária para o serviço funcionar.',
          'A OrçaAI não vende dados de clientes finais, e não compartilha os dados de um prestador com outro: cada conta enxerga só os próprios orçamentos.',
        ],
      },
      {
        heading: '6. Direitos do titular',
        paragraphs: [
          'Se você é cliente final de um prestador que usa a OrçaAI, seus direitos como titular (acesso, correção, exclusão) são exercidos junto ao prestador — ele é o controlador dos seus dados. Peça a ele a exclusão dos seus dados; a plataforma dá a ele a ferramenta para atender esse pedido sem precisar de suporte técnico.',
          'Se você é o prestador (dono da conta), pode pedir a exclusão da sua conta e dos dados que ela contém entrando em contato com a gente.',
        ],
      },
      {
        heading: '7. Consentimento de mídia: histórico de versões',
        paragraphs: [
          'O texto de consentimento apresentado no formulário público mudou ao longo do tempo. Um consentimento já registrado aponta para a versão exata que a pessoa leu naquele momento — a lista abaixo mantém todas as versões publicadas.',
        ],
      },
      {
        heading: '8. Mudanças nesta Política',
        paragraphs: [
          'Quando o texto muda, publicamos uma nova versão datada nesta mesma página, mantendo as versões anteriores acessíveis.',
        ],
      },
    ],
  },
];
