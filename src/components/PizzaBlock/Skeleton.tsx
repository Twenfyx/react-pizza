import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 220 500"
    backgroundColor="#e0e3e6"
    foregroundColor="#ebeaeb"
  >
    <rect x="0" y="208" rx="10" ry="10" width="210" height="34" />
    <rect x="-1" y="6" rx="100" ry="100" width="210" height="188" />
    <rect x="0" y="260" rx="10" ry="10" width="210" height="70" />
    <rect x="0" y="350" rx="0" ry="0" width="95" height="30" />
    <rect x="113" y="351" rx="20" ry="20" width="101" height="36" />
  </ContentLoader>
);

export default Skeleton;
