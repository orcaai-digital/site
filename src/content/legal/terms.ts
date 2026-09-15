/**
 * Termos de Uso, versionados (privacy-and-consent LGPD-01/02/03).
 *
 * `version` de `TERMS_VERSIONS[0]` é um espelho manual de
 * `TERMS_OF_USE_VERSION` em `apps/api/src/legal/legal-texts.constants.ts` —
 * este workspace não tem lib compartilhada entre `apps/api` e `apps/site`
 * (AD-011), então as duas strings precisam ser trocadas juntas por quem
 * publicar uma nova versão.
 *
 * Sem CMS de propósito: o conteúdo é literal, como `duvidas/page.tsx`. Cada
 * versão fica no array para sempre — LGPD-02 exige que um aceite antigo
 * continue apontando para o texto que a pessoa realmente leu.
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

export const TERMS_VERSIONS: LegalDocumentVersion[] = [
  {
    version: '2026-09-14.v1',
    publishedAt: '14 de setembro de 2026',
    sections: [
      {
        heading: '1. O que é a OrçaAI',
        paragraphs: [
          'A OrçaAI é uma plataforma que ajuda prestadores de serviço a responder pedidos de orçamento pelo WhatsApp, usando um catálogo de produtos e regras que o próprio prestador cadastra.',
          'Ao criar uma conta, você contrata a OrçaAI para operar essa conversa em seu nome, com o número de WhatsApp que você já usa.',
        ],
      },
      {
        heading: '2. Quem é quem: controlador e operador',
        paragraphs: [
          'Você — o prestador de serviço que cria a conta — é o controlador dos dados pessoais dos seus clientes finais (nome, telefone, e-mail, endereço e, quando aplicável, foto ou vídeo do local do serviço). É você quem decide para que esses dados são usados e por quanto tempo.',
          'A OrçaAI é a operadora: trata esses dados apenas para prestar o serviço contratado por você — conduzir a conversa, montar o orçamento e gerar o documento — e conforme suas instruções e o que está descrito na nossa Política de Privacidade.',
        ],
      },
      {
        heading: '3. Sua conta',
        paragraphs: [
          'Você é responsável pela veracidade dos dados informados no cadastro e pela guarda da sua senha. Avise a gente se suspeitar de acesso indevido à sua conta.',
          'O aceite destes Termos é registrado com a versão vigente e o instante em que você criou a conta.',
        ],
      },
      {
        heading: '4. Uso aceitável',
        paragraphs: [
          'O catálogo, as regras de preço e as conversas que a plataforma conduz são de responsabilidade sua: a OrçaAI não valida se um preço está correto, só aplica a tabela que você cadastrou.',
          'Você não pode usar a plataforma para fins ilícitos, para enviar conteúdo que viole direitos de terceiros, ou de forma que abuse da infraestrutura compartilhada com outros clientes da OrçaAI.',
        ],
      },
      {
        heading: '5. Disponibilidade e limitação de responsabilidade',
        paragraphs: [
          'A OrçaAI se esforça para manter o serviço no ar, mas não garante disponibilidade ininterrupta — dependemos, entre outras coisas, da API do WhatsApp e de provedores de infraestrutura de terceiros.',
          'Dentro dos limites da lei, a OrçaAI não se responsabiliza por perdas indiretas decorrentes de indisponibilidade do serviço ou de um orçamento gerado com dados que você mesmo cadastrou incorretamente.',
        ],
      },
      {
        heading: '6. Encerramento',
        paragraphs: [
          'Você pode encerrar sua conta a qualquer momento entrando em contato com a gente. Dados de orçamentos já gerados seguem a retenção descrita na Política de Privacidade.',
          'A OrçaAI pode suspender ou encerrar uma conta que descumpra estes Termos, avisando com a antecedência possível diante da gravidade do caso.',
        ],
      },
      {
        heading: '7. Mudanças nestes Termos',
        paragraphs: [
          'Quando o texto muda, publicamos uma nova versão datada nesta mesma página, mantendo as versões anteriores acessíveis. Contas criadas sob uma versão anterior continuam com o registro de qual versão aceitaram.',
        ],
      },
      {
        heading: '8. Lei aplicável',
        paragraphs: [
          'Estes Termos são regidos pela lei brasileira, incluindo a Lei Geral de Proteção de Dados (Lei 13.709/2018).',
        ],
      },
    ],
  },
];
