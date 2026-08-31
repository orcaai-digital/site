import type { Metadata } from 'next';
import { FinalCta } from '@/components/FinalCta';

export const metadata: Metadata = {
  title: 'Como funciona — OrçaAI',
  description:
    'O passo a passo completo: do cadastro do catálogo ao PDF assinado no WhatsApp do cliente.',
  alternates: { canonical: '/como-funciona' },
};

const ETAPAS = [
  {
    n: '01',
    h: 'Você cadastra o seu catálogo, uma vez',
    p: 'Os produtos e serviços que você vende, como cada um é cobrado (metro quadrado, metro linear, unidade, pessoa, hora), os acabamentos e as variações. É a parte que dá trabalho, e a gente faz junto com você na primeira conversa.',
  },
  {
    n: '02',
    h: 'Você define as perguntas de cada item',
    p: 'Para uma bancada: medida, cuba, tipo de pedra, rodapé. Para um portão: metro linear, altura, motor, pintura. São as perguntas que você já faz todo dia — a diferença é que agora elas ficam registradas e nunca são esquecidas.',
  },
  {
    n: '03',
    h: 'Seu cliente conversa no WhatsApp',
    p: 'No número que você já divulga. Ele descreve o que quer, do jeito dele. As perguntas que faltam vão sendo feitas na ordem certa, uma de cada vez, sem parecer formulário.',
  },
  {
    n: '04',
    h: 'O orçamento é montado',
    p: 'As respostas viram itens, os itens viram preço pela sua tabela, e o total sai com as suas condições de pagamento e prazo de validade.',
  },
  {
    n: '05',
    h: 'Você confere e envia',
    p: 'O orçamento aparece no seu painel antes de ir. Você lê, muda o que quiser, aprova. O PDF chega no WhatsApp do cliente com a sua marca.',
  },
];

export default function ComoFunciona() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow">como funciona</span>
          <h1 style={{ marginTop: 16 }}>Do “boa tarde” ao PDF assinado.</h1>
          <p className="lead">
            O passo a passo inteiro, sem simplificação de folheto — inclusive o que acontece quando
            alguma coisa foge do padrão.
          </p>
        </div>
      </section>

      <section className="blk tight">
        <div className="wrap">
          <div className="steps">
            {ETAPAS.map(({ n, h, p }) => (
              <div className="s" key={n}>
                <span className="n">{n}</span>
                <div>
                  <h3>{h}</h3>
                </div>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="blk">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">o que continua seu</span>
            <h2 style={{ marginTop: 14 }}>Você não perde o controle de nada.</h2>
          </div>
          <div className="grid g3">
            <div className="card">
              <span className="n">controle</span>
              <h3>Nada sai sem aprovação</h3>
              <p>
                Todo orçamento passa por você. Quando ganhar confiança, libera o automático — e volta
                atrás quando quiser, item por item.
              </p>
            </div>
            <div className="card">
              <span className="n">preço</span>
              <h3>A tabela é sua</h3>
              <p>
                Seus valores, suas regras de desconto, suas condições. Nenhum preço é sugerido por
                conta própria.
              </p>
            </div>
            <div className="card">
              <span className="n">marca</span>
              <h3>O PDF é seu</h3>
              <p>
                Seu logo, suas cores, seus dados de contato. A OrçaAI assina pequeno no rodapé — e só.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="blk tight">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">quando foge do padrão</span>
            <h2 style={{ marginTop: 14 }}>E quando o pedido é fora do comum?</h2>
            <p>É o caso mais importante, e o que quase ninguém conta.</p>
          </div>
          <div className="grid g2">
            <div className="card">
              <h3>A conversa é sua a qualquer momento</h3>
              <p>
                Se você começar a escrever, a conversa passa para você na hora. A OrçaAI para e só
                volta a ajudar quando você pedir.
              </p>
            </div>
            <div className="card">
              <h3>O que não dá para orçar sozinho, não é orçado</h3>
              <p>
                Quando o pedido sai do que está cadastrado, o cliente é avisado de que alguém vai
                retomar dali a pouco, e você recebe o aviso. Ninguém inventa um número para não
                deixar a conversa parada.
              </p>
            </div>
            <div className="card">
              <h3>Visita técnica continua existindo</h3>
              <p>
                Serviço que precisa de medição no local não vira preço fechado no chat. O que a
                OrçaAI faz é adiantar tudo o que dá — e agendar a visita já com o contexto na mão.
              </p>
            </div>
            <div className="card">
              <h3>Tudo fica registrado</h3>
              <p>
                Cada orçamento guarda a conversa que deu origem a ele. Se o cliente cobrar depois,
                está tudo lá.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
