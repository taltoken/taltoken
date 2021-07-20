import TitledContent from "../components/TitledContext";
import { Styled, StyledLink, StyledMailto } from "../components/StyledLinks";
import FAQContent from "../components/FAQContent";
import PrivateKeyWarning from "../components/PrivateKeyWarning";

import { DISCORD_URL, EMAIL_ADDRESS, TELEGRAM_URL } from "../common/constants";

const Support = () => (
    <main>
        <PrivateKeyWarning />
        <SupportContent />
    </main>
);
export default Support;

const SupportContent = () => (
    <TitledContent title="Taral support" maxwidth="sm:max-w-3xl">
        <FAQContent title="I am a software developer">
            You are welcome to join in our{" "}
            <StyledLink type={Styled.PageLink} external href={DISCORD_URL}>
                Discord
            </StyledLink>
            . Also you can ask open questions on{" "}
            <StyledLink type={Styled.PageLink} external href={TELEGRAM_URL}>
                our Telegram group
            </StyledLink>
        </FAQContent>
        <FAQContent title="How can I reach you by email?">
            We can be reached
            <StyledMailto email={EMAIL_ADDRESS}>
                here.
            </StyledMailto>
        </FAQContent>
    </TitledContent>
);