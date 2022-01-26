import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

type PropTypes = {
  platform: 'mac' | 'arm64';
  className?: string;
  variant?: string;
};

export default function DownloadButton(props: PropTypes) {
  const { platform, className, variant } = props;
  const suffix = platform === 'arm64' ? '-arm64.dmg' : '.dmg';
  const label =
    platform === 'arm64' ? 'Mac Download (M1)' : 'Mac Download (Intel)';

  const [link, setLink] = useState<string>('');

  useEffect(() => {
    fetch(
      'https://api.github.com/repos/aolsenjazz/super-controller/releases/latest'
    )
      .then((res) => res.json())
      .then((data) => {
        const tag: string = data.tag_name; // e.g. v1.2.22
        const version = tag.substring(1); // e.g. 1.2.22
        setLink(
          `https://github.com/aolsenjazz/super-controller/releases/latest/download/SuperController-${version}${suffix}`
        );
      });
  }, [suffix]);

  return (
    <Button href={link} target="_blank" variant={variant} className={className}>
      {label}
    </Button>
  );
}
