import type { Metadata } from 'next';
import { Faq, type Pergunta } from '@/components/Faq';
import { FinalCta } from '@/components/FinalCta';

export const metadata: Metadata = {
  title: 'Dúvidas — OrçaAI',
  description:
    'Número, preço, controle, dados e LGPD: as perguntas que todo mundo faz antes de contratar.',
  alternates: { canonical: '/duvidas' },
};

const DIA_A_DIA: Pergunta[] = [
  {
    q: 'Preciso trocar meu número de WhatsApp?',
    a: (
      <p>
        Não. A OrçaAI trabalha com o número que você já divulga há anos, em cartão, placa e anúncio.
        Seu cliente não percebe diferença nenhuma — ele continua conversando no mesmo lugar.
      </p>
    ),
  },
  {
    q: 'E se ele errar o preço?',
    a: (
      <p>
        Ele não inventa preço: só usa a tabela que você cadastrou. E nada sai sem você aprovar — você
        lê o orçamento, ajusta o que quiser e só então envia.
      </p>
    ),
  },
  {
    q: 'Meu serviço é complicado, tem muita variável.',
    a: (
      <p>
        É justamente aí que compensa mais. Você cadastra uma vez as perguntas que precisa fazer e
        elas passam a ser feitas sempre, na ordem certa, sem você esquecer nenhuma às seis da tarde
        de uma sexta.
      </p>
    ),
  },
  {
    q: 'Meu cliente vai perceber que é robô?',
    a: (
      <p>
        A conversa é escrita no seu tom e você entra no meio dela quando quiser. Na prática o cliente
        sente que foi atendido rápido — que é o que ele queria. A gente não finge ser humano nem
        anuncia que é máquina: responde e resolve.
      </p>
    ),
  },
  {
    q: 'E se eu quiser responder eu mesmo?',
    a: (
      <p>
        É só escrever. Assim que você assume a conversa, ela é sua e a OrçaAI para. Ela volta a
        ajudar quando você pedir.
      </p>
    ),
  },
  {
    q: 'Funciona fora do horário comercial?',
    a: (
      <p>
        Funciona sempre. É onde ela mais rende: o cliente que manda mensagem às onze da noite recebe
        atenção na hora, e você acorda com o orçamento pronto esperando aprovação.
      </p>
    ),
  },
];

const CONTRATAR: Pergunta[] = [
  {
    q: 'Quanto custa?',
    a: (
      <p>
        Fale com a gente e a gente monta com você. O preço depende do volume de orçamentos que o seu
        negócio faz por mês — não faz sentido cobrar de quem faz dez o mesmo de quem faz trezentos.
      </p>
    ),
  },
  {
    q: 'Tem fidelidade?',
    a: (
      <p>
        Essa é uma condição comercial que a gente combina na conversa. Traga a pergunta — ela é
        justa.
      </p>
    ),
  },
  {
    q: 'Quanto tempo leva para começar a funcionar?',
    a: (
      <p>
        O que leva tempo é cadastrar o seu catálogo e as suas regras. A gente faz isso junto com
        você; depois disso é ligar.
      </p>
    ),
  },
  {
    q: 'Preciso saber mexer em computador?',
    a: (
      <p>
        Não. Quem conversa com o cliente é o WhatsApp, que você já usa. O painel serve para conferir
        e aprovar, e foi desenhado para ser usado no celular, com o dedo.
      </p>
    ),
  },
];

const DADOS: Pergunta[] = [
  {
    q: 'O que acontece com as conversas dos meus clientes?',
    a: (
      <p>
        Ficam guardadas na sua conta, ligadas ao orçamento que deram origem, para você poder
        consultar depois. São seus dados: você pode exportar e pode pedir exclusão.
      </p>
    ),
  },
  {
    q: 'Vocês usam minhas conversas para treinar alguma coisa?',
    a: (
      <p>
        Não. Suas conversas e sua tabela de preços não são usadas para treinar modelo nenhum, nem
        compartilhadas com outro cliente da OrçaAI.
      </p>
    ),
  },
  {
    q: 'E a LGPD?',
    a: (
      <p>
        Você continua sendo o controlador dos dados dos seus clientes e a OrçaAI opera como
        operadora, tratando os dados apenas para gerar o seu orçamento. Os detalhes formais ficam no
        contrato.
      </p>
    ),
  },
];

export default function Duvidas() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow">dúvidas</span>
          <h1 style={{ marginTop: 16 }}>O que todo mundo pergunta</h1>
          <p className="lead">
            Se a sua pergunta não estiver aqui, chama no WhatsApp que a gente responde de verdade.
          </p>
        </div>
      </section>

      <section className="blk tight">
        <div className="wrap">
          <Faq titulo="Sobre o dia a dia" itens={DIA_A_DIA} />
          <Faq titulo="Sobre contratar" itens={CONTRATAR} />
          <Faq titulo="Sobre dados" itens={DADOS} />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
