import { useEffect } from "react";
import { useRouter } from "next/router";

const PaymentCallback: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    alert('Payment successful!');
    router.push('/');
  }, [router]);

  return null;
};

export default PaymentCallback;