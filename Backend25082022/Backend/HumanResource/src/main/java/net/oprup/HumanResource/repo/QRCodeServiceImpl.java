package net.oprup.HumanResource.repo;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.Invoice;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.apache.commons.codec.DecoderException;
import org.apache.commons.codec.binary.Base64;
import org.apache.commons.codec.binary.Hex;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;


@Service
public class QRCodeServiceImpl implements QRCodeService {

    private Logger logger = LoggerFactory.getLogger(QRCodeServiceImpl.class);
    public static final Charset ISO_8859_1 = Charset.forName("ISO-8859-1");
    public static final Charset UTF_8 = Charset.forName("UTF-8");





    @Override
    public byte[] generateQRCode(String qrContent1,String qrContent2,String qrContent3,String qrContent4,String qrContent5, int width, int height) throws DecoderException {
        try {
            QRCodeWriter qrCodeWriter = new QRCodeWriter();

            try {
            }catch (Exception e) {
                e.printStackTrace();
            }
            String tag1="";
            if(isProbablyArabic(qrContent1)) {
                tag1 = getHexStringArabic(1, qrContent1);
            }else {
                tag1 = getHexString(1, qrContent1);
            }
            System.out.println(tag1);

            String tag2 = getHexString(2, qrContent2);
            DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
            LocalDateTime now = LocalDateTime.now();
            System.out.println(dtf.format(now));
            String tag3 = getHexStringDate(3, now.toString());
            String tag4 = getHexString(4, qrContent4);
            String tag5 = getHexString(5, qrContent5);




            String finalString =tag1 + tag2 + tag3 + tag4 + tag5;
            byte[] decodedHex = Hex.decodeHex(finalString.toCharArray());
            System.out.println(new String(decodedHex, StandardCharsets.UTF_8));
            String result = Base64.encodeBase64String(decodedHex);
            System.out.println("==> " + result);
            BitMatrix bitMatrix = qrCodeWriter.encode(result, BarcodeFormat.QR_CODE, width, height);
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            MatrixToImageWriter.writeToStream(bitMatrix, "PNG", byteArrayOutputStream);
            return byteArrayOutputStream.toByteArray();
        } catch (WriterException e) {
            logger.error(e.getMessage(), e);
        } catch (IOException e) {
            logger.error(e.getMessage(), e);
        }
        return null;
    }







    static String getHexStringArabic(int tagNo, String tagValue) {
        String tagNumLengthHexString = Integer.toHexString(tagNo);
        int tagValueLength = 0;
        tagValue=tagValue.trim();
        System.out.println(spaceCount(tagValue));
        tagValueLength = (tagValue.length()* 2 ) - spaceCount(tagValue);


        String tagValueLengthHexString = Integer.toHexString(tagValueLength);

        byte[] tagValueBytes = tagValue.getBytes(StandardCharsets.UTF_8);
        System.out.println(new String(tagValueBytes));
        String tagValueHexString = Hex.encodeHexString(tagValueBytes);
        System.out.println("---------------------------");
        System.out.println(tagValueHexString);
        System.out.println("---------------------------");
        System.out.println((0 + tagNumLengthHexString) + (0 + tagValueLengthHexString) + tagValueHexString);
        if(tagValue.split(" ").length>1) {
            return (0 + tagNumLengthHexString) + (tagValueLengthHexString) + tagValueHexString;
        }
        return (0 + tagNumLengthHexString) + (0 + tagValueLengthHexString) + tagValueHexString;
    }
    public static boolean isProbablyArabic(String s) {
        for (int i = 0; i < s.length();) {
            int c = s.codePointAt(i);
            if (c >= 0x0600 && c <= 0x06E0)
                return true;
            i += Character.charCount(c);
        }
        return false;
    }
    static String getHexString(int tagNo, String tagValue) {
        String tagNumLengthHexString = Integer.toHexString(tagNo);

        int tagValueLength = tagValue.length();
        String tagValueLengthHexString = Integer.toHexString(tagValueLength);

        byte[] tagValueBytes = tagValue.getBytes(StandardCharsets.UTF_8);
        System.out.println(new String(tagValueBytes));
        String tagValueHexString = Hex.encodeHexString(tagValueBytes);

        System.out.println();
        return (0 + tagNumLengthHexString) + (0 + tagValueLengthHexString) + tagValueHexString;
    }
    static String getHexStringDate(int tagNo, String tagValue) {
        String tagNumLengthHexString = Integer.toHexString(tagNo);

        int tagValueLength = tagValue.length();
        String tagValueLengthHexString = Integer.toHexString(tagValueLength);

        byte[] tagValueBytes = tagValue.getBytes(StandardCharsets.UTF_8);
        System.out.println(new String(tagValueBytes));
        String tagValueHexString = Hex.encodeHexString(tagValueBytes);

        System.out.println();
        return (0 + tagNumLengthHexString) + (tagValueLengthHexString) + tagValueHexString;
    }
    static int spaceCount(String str)
    {
        int count = 0;
        for (char c : str.toCharArray()) {
            if (c == ' ') {
                count++;
            }
        }
        return count;
    }

    public QRCodeServiceImpl(InvoiceRepo invoiceRepo) {
        this.invoiceRepo = invoiceRepo;
    }




    private final InvoiceRepo invoiceRepo;
    public List<Invoice> findAllInvoices(){
        return  invoiceRepo.findInvoicesByDeleteFlag();
    }

    @Override
    public Invoice findInvoiceById(Long invoiceId) {
        return invoiceRepo.findInvoiceByInvoiceId(invoiceId)
                .orElseThrow(() -> new UserNotFoundException("Invoice by id: " + invoiceId + " not found"));
    }



    public Invoice addInvoice(Invoice invoice){
        invoice.setDeleteFlag(1);
        return invoiceRepo.save(invoice);
    }

}
