import FeaturedImage from '../../components/image/FeaturedImage';
import PageBodyBoxed from '../../components/containers/PageBodyBoxed';
import SectionTitle from '../../components/section/SectionTitle';
import SectionSubtitle from '../../components/section/SectionSubtitle';
import SectionTextBox from '../../components/section/SectionTextBox';

export default function Index() {
  return (
    <div>
      <FeaturedImage />
      <PageBodyBoxed>
        <SectionTitle>The Project</SectionTitle>
        <SectionTextBox>
          <SectionSubtitle>Why CoPro?</SectionSubtitle>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          ad adipisci aliquam consequatur quod! Aliquam, atque cum delectus
          dignissimos earum facere maxime minima nostrum quis sequi sunt
          suscipit vel, voluptatem!
          <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusamus aliquid architecto corporis ducimus eius eligendi fugit
          harum inventore ipsa, nobis non quaerat qui quibusdam quisquam
          temporibus totam veritatis? Illo, nihil?
        </SectionTextBox>
        <SectionTextBox>
          <SectionSubtitle>Why we created this app?</SectionSubtitle>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          ad adipisci aliquam consequatur quod! Aliquam, atque cum delectus
          dignissimos earum facere maxime minima nostrum quis sequi sunt
          suscipit vel, voluptatem! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Accusamus aliquid architecto corporis ducimus eius
          eligendi fugit harum inventore ipsa, nobis non quaerat qui quibusdam
          quisquam temporibus totam veritatis? Illo, nihil? Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Asperiores consectetur earum
          libero nobis officia porro quis sint temporibus. Accusamus explicabo
          facere iste laudantium nihil nulla pariatur possimus similique vitae
          voluptate!
        </SectionTextBox>
        <SectionTextBox>
          <SectionSubtitle>What stack we use?</SectionSubtitle>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          ad adipisci aliquam consequatur quod! Aliquam, atque cum delectus
          dignissimos earum facere maxime minima nostrum quis sequi sunt
          suscipit vel, voluptatem! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Accusamus aliquid architecto corporis ducimus eius
          eligendi fugit harum inventore ipsa, nobis non quaerat qui quibusdam
          quisquam temporibus totam veritatis? Illo, nihil? Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Asperiores consectetur earum
          libero nobis officia porro quis sint temporibus. Accusamus explicabo
          facere iste laudantium nihil nulla pariatur possimus similique vitae
          voluptate!
        </SectionTextBox>
      </PageBodyBoxed>
    </div>
  );
}
