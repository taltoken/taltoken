import TitledContent from "../components/TitledContext";
import { Styled, StyledIcon, StyledLink } from "../components/StyledLinks";
import {
  STACKS_URL,
} from "../common/constants";
import FAQContent from "../components/FAQContent";

const Home = () => (
  <main>
    <WhatItIs />
    <FAQ />
  </main>
);
export default Home;

const FAQ = () => (
  <TitledContent title="Frequently asked questions" maxwidth="sm:max-w-3xl">
    <FAQContent title="How can I help the Taral project?">
      Glad you asked. Taral project is developed by open source developers. 
      Please contact us on Discord or Telegram if you want to help the project.
    </FAQContent>
    <FAQContent title="Is there a token?">
      A token is being currently developed, the ticker is {" "}
      <StyledLink type={Styled.PageLink} href='#'>
        TAL.
      </StyledLink>
    </FAQContent>
    <FAQContent title="What's the underlying tech?">
      This is developed on the {" "}
      <StyledLink type={Styled.PageLink} href={STACKS_URL}>
        Stacks blockchain enabling us to use the full power of smart contracts and security on top of Bitcoin.
      </StyledLink>
    </FAQContent>
    <FAQContent title="When will this get released?">
      We are actively developing Taral, we will update the website once we have a clear timeline.
    </FAQContent>
  </TitledContent>
);

const WhatItIs = () => (
  <div className="flex sm:flex-row sm:justify-center">
    <div className="flex flex-col mx-6 mt-16 font-thin text-gray-700 sm:flex-row sm:mx-8 sm:space-x-16 sm:max-w-5xl">
      <div className="sm:w-1/2">
        <h2 className="text-3xl">What is Is taral?</h2>
        <p className="mt-6 text-lg leading-6">
          Taral is an upcoming Stacks blockchain based platform aiming to reduce the friction, costs and time normally associated with trade finance.
        </p>
      </div>
      <div className="mt-16 sm:w-1/2 sm:mt-0">
        <h2 className="text-3xl">What are we trying to solve?</h2>
        <p className="mt-6 text-lg leading-6">
        Traditionally, {" "}
        <StyledLink type={Styled.PageLink} href='#'>
            trade finance offered by banks
        </StyledLink>
         can take weeks, requests are often rejected and transactions are expensive.
        </p>
      </div>

      <div className="mt-16 sm:w-1/2 sm:mt-0">
        <h2 className="text-3xl">How does it work?</h2>
        <p className="mt-6 text-lg leading-6">
        By moving trade finance transactions on-chain, we unlock DeFi for
        <StyledLink type={Styled.PageLink} href='#'>
        real-world international trade
        </StyledLink>, a $10.8tn global market.
        Companies that don't know each other can now 
        <StyledLink type={Styled.PageLink} href='#'>
        trade internationally and access liquidity, with full trust
        </StyledLink>, 
        thanks to the security of smart contracts built with Stacks on top of Bitcoin.
        </p>
      </div>
    </div>
  </div>
);
