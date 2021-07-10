import FeaturedImage from '../../components/image/FeaturedImage';
import SectionHeader from '../../components/section/SectionHeader';
import PageBodyBoxed from '../../components/containers/PageBodyBoxed';
import SectionTextBox from '../../components/section/SectionTextBox';

export default function Index() {
  return (
    <div>
      <FeaturedImage />
      <PageBodyBoxed>
        <SectionHeader>The Project</SectionHeader>
        <SectionTextBox>
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
