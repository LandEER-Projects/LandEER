const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;
const logoImage = assetPath('assets/landeer-logo-full.png');

export function Logo({ compact = false }) {
  return (
    <img
      src={logoImage}
      alt="LandEER"
      decoding="async"
      className={`w-auto object-contain ${compact ? 'h-9 max-w-[13rem]' : 'h-9 max-w-[13rem] sm:h-10 sm:max-w-[15rem]'}`}
    />
  );
}
