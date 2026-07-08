// @flow strict
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

function CertificateCard({ certificate, priority = false }) {
  const hasCertificateUrl = certificate?.url && certificate.url !== '#';

  return (
    <div className="h-full border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group flex flex-col"
    >
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={certificate?.cover_image}
          height={1080}
          width={1920}
          className='h-full w-full group-hover:scale-110 transition-all duration-300'
          alt={certificate?.title || ''}
          priority={priority}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-1 flex-col">
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          <p>{timeConverter(certificate.issued_at)}</p>
          <p className="flex items-center gap-1">
            <FaAward />
            <span>{certificate.issuer}</span>
          </p>
        </div>
        {
          hasCertificateUrl ? (
            <Link target='_blank' href={certificate.url}>
              <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
                {certificate.title}
              </p>
            </Link>
          ) : (
            <p className='my-2 lg:my-3 text-lg text-white sm:text-xl font-medium'>
              {certificate.title}
            </p>
          )
        }
        <p className='mb-2 text-sm text-[#16f2b3]'>
          Verified Certificate
        </p>
        <p className='text-xs lg:text-sm text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
          {certificate.description}
        </p>
        {
          hasCertificateUrl &&
          <Link
            target='_blank'
            href={certificate.url}
            className='mt-auto inline-flex w-fit items-center gap-2 rounded-md border border-violet-500/40 px-3 py-2 text-sm font-medium text-violet-300 hover:border-violet-400 hover:text-violet-200'
          >
            <FaExternalLinkAlt className='shrink-0' size={12} />
            <span>View detail</span>
          </Link>
        }
      </div>
    </div>
  );
};

export default CertificateCard;
