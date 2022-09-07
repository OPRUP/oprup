package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.Invoice;
import org.apache.commons.codec.DecoderException;

import java.util.List;

public interface QRCodeService {

    byte[] generateQRCode(String qrContent1,String qrContent2,String qrContent3,String qrContent4,String qrContent5, int width, int height) throws DecoderException;
    public List<Invoice> findAllInvoices();
    public Invoice findInvoiceById(Long invoiceId);

    Invoice addInvoice(Invoice invoice);
}
